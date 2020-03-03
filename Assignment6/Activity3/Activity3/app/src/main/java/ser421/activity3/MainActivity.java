package ser421.activity3;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private Button submitButton;
    private EditText nameText;
    private TextView introText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Widgets
        submitButton = (Button)findViewById(R.id.button);
        nameText = (EditText)findViewById(R.id.editText);
        introText = (TextView)findViewById(R.id.textView);

        //button listener
        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String str = nameText.getText().toString().trim();
                if(str !=null && !str.equals("")) {
                    //Toast.makeText(getApplicationContext(), "Let's start", Toast.LENGTH_SHORT).show();
                    Intent webIntent = new Intent(MainActivity.this, WebActivity.class);
                    webIntent.putExtra("NAME", str);
                    startActivity(webIntent);
                }else{
                    Toast.makeText(getApplicationContext(), "Put in a name.", Toast.LENGTH_LONG).show();
                }
            }
        });

    }

    @Override
    protected void onPause(){
        super.onPause();
        nameText.setText("Name");
    }
}
