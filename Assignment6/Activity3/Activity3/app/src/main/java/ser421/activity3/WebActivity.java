package ser421.activity3;

import android.content.Context;
import android.content.Intent;
import android.graphics.Point;
import android.os.Bundle;
import android.view.Display;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class WebActivity extends AppCompatActivity {
    private WebView browser;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web);
        browser = (WebView)findViewById(R.id.webView);
        //Get name from main activity

        final String name = getIntent().getStringExtra("NAME");

        browser.setWebContentsDebuggingEnabled(true);

        browser.setWebChromeClient(new WebChromeClient());

        //enable js
        WebSettings webSettings = browser.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        webSettings.setDomStorageEnabled(true);

        //browser.getSettings().setUseWideViewPort(true);
        //browser.getSettings().setLoadWithOverviewMode(true);

        //wait for page to load then pass in name
        browser.setWebViewClient(new WebViewClient() {
            public void onPageFinished(WebView view, String url) {
                browser.evaluateJavascript("getName(\""+name+"\")", null);
            }
        });

        // Make a Java object available in the WebView:
        browser.addJavascriptInterface(new WebAppInterface(this.getApplicationContext()), "Android");


        browser.loadUrl("file:///android_asset/www/index.html");

        browser.setInitialScale(getScale());
    }


    private int getScale()
    {
        Display display = ((WindowManager) getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();
        Point size = new Point();
        display.getSize(size);
        int width = size.x;
        int height = size.y;
        Double val = new Double(width)/new Double(600);
        val = val * 100d;
        return val.intValue();
    }

}

class WebAppInterface {
    private Context mContext;

    WebAppInterface(Context c) {
        mContext = c;
    }

    @JavascriptInterface
    public void showName(String name) {
        Toast.makeText(mContext.getApplicationContext(), "showMe "+name, Toast.LENGTH_LONG).show();
    }

    @JavascriptInterface
    public void restart() {
        Intent mainIntent = new Intent(mContext, MainActivity.class);
        mainIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        mContext.startActivity(mainIntent);
    }

    @JavascriptInterface
    public void done(String status, String name){
        Intent lastIntent = new Intent(mContext, LastActivity.class);
        lastIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        lastIntent.putExtra("NAME", name);

        lastIntent.putExtra("STATUS", status);
        mContext.startActivity(lastIntent);
    }


}
