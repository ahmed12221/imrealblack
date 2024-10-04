from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message

app = Flask(__name__)

# إعدادات البريد الإلكتروني
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # خادم SMTP لـ Gmail
app.config['MAIL_PORT'] = 587  # المنفذ للبريد الوارد
app.config['MAIL_USE_TLS'] = True  # استخدم TLS
app.config['MAIL_USERNAME'] = 'bronamorna@gmail.com'  # بريدك الإلكتروني
app.config['MAIL_PASSWORD'] = 'fhqlkygtpouobhud'  # كلمة مرور بريدك الإلكتروني (مؤقتة)
app.config['MAIL_DEFAULT_SENDER'] = 'bronamorna@gmail.com'  # البريد الإلكتروني الافتراضي

mail = Mail(app)

app.secret_key = 'g#7a3$Z2%k8e!yQ8*V9u3@D1'  # يجب تغيير هذه القيمة في التطبيق الحقيقي

# الصفحة الرئيسية
@app.route('/')
def home():
    return render_template('index.html')  # إرسال قالب الصفحة الرئيسية

# صفحة الألعاب
@app.route('/games')
def games():
    return render_template('gaming.html')  # إرسال قالب الألعاب

# صفحة البرمجة
@app.route('/programming')
def programming():
    return render_template('programming.html')  # إرسال قالب البرمجة
@app.route('/sleeping')
def sleeping():
    return render_template('sleeping.html')

# نموذج الاتصال
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # إعداد رسالة البريد الإلكتروني
        msg = Message('رسالة جديدة من نموذج الاتصال',
                      recipients=['bronamorna@gmail.com'])  # استبدل بعنوان بريدك الإلكتروني
        msg.body = f'Name: {name}\nEmail: {email}\nMessage: {message}'
            
        # إرسال الرسالة
        mail.send(msg)

        flash('تم إرسال الرسالة بنجاح!', 'success')
        return redirect(url_for('home'))  # إعادة توجيه المستخدم إلى الصفحة الرئيسية

    # إذا كانت GET، عرض نموذج الاتصال
    return render_template('index.html')  # أو استخدم قالب مخصص لنموذج الاتصال

if __name__ == '__main__':
    app.run(debug=True)
