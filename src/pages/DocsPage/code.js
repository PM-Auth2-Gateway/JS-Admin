export const androidCode2 = `<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    
    <data
        android:host="test"
        android:scheme="pmlogintest" />
</intent-filter>`;

export const androidCode6 = `<com.example.pmLoginAndroid.ui.PMAuthButton
    android:id="@+id/btn_pmlogin"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />`;
