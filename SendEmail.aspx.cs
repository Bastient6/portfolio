using System;
using System.Net;
using System.Net.Mail;

public partial class SendEmail : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.HttpMethod == "POST")
        {
            SendEmail();
        }
    }

    protected void SendEmail()
    {
        string name = Request.Form["name"];
        string email = Request.Form["email"];
        string message = Request.Form["message"];

        try
        {
            // Configuration pour le serveur SMTP de Gmail
            string smtpServer = "smtp.gmail.com";
            int smtpPort = 587;
            string smtpUsername = "tbastien6@gmail.com"; // Remplacez par votre adresse Gmail
            string smtpPassword = "hpuq pljn sysp tauv";

            using (SmtpClient client = new SmtpClient(smtpServer, smtpPort))
            {
                client.Credentials = new NetworkCredential(smtpUsername, smtpPassword);
                client.EnableSsl = true;

                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress(smtpUsername);
                mailMessage.To.Add("bastien.tiffy@epitech.eu"); // Remplacez par l'adresse e-mail de réception
                mailMessage.Subject = "Nouveau message de " + name;
                mailMessage.Body = $"De: {email}\n\n{message}";

                client.Send(mailMessage);

                Response.Write("E-mail envoyé avec succès!");
            }
        }
        catch (Exception ex)
        {
            Response.Write("Erreur lors de l'envoi de l'e-mail: " + ex.Message);
        }
    }
}
