package ser421.assignment6;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class LastActivity extends AppCompatActivity {

    private Button resume;
    private Button quit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_last);

        final String name = getIntent().getStringExtra("NAME");
        final String status = getIntent().getStringExtra("STATUS");

        TextView textView = (TextView) findViewById(R.id.textView2);
        textView.setText("Player " + name + " has " + status);

        resume = (Button)findViewById(R.id.button2);
        quit = (Button)findViewById(R.id.button3);

        resume.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent webIntent = new Intent(LastActivity.this, WebActivity.class);
                webIntent.putExtra("NAME", name);
                startActivity(webIntent);
            }
        });

        quit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mainIntent = new Intent(LastActivity.this, MainActivity.class);
                startActivity(mainIntent);
            }
        });
    }

}
