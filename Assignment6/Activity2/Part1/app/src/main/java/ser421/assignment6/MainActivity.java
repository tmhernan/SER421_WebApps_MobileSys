package ser421.assignment6;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.view.Display;
import android.view.WindowManager;
import android.content.Context;
import android.graphics.Point;



public class MainActivity extends AppCompatActivity {
    private WebView browser;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        browser = (WebView)findViewById(R.id.webView);

        browser.setWebContentsDebuggingEnabled(true);

        browser.setWebChromeClient(new WebChromeClient());

        //enable js
        WebSettings webSettings = browser.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        webSettings.setDomStorageEnabled(true);

        //browser.getSettings().setUseWideViewPort(true);
        //browser.getSettings().setLoadWithOverviewMode(true);

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

