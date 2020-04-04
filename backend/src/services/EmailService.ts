interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  // o ? é pq esse item não é obrigatorio
  attachment?: string[]; // ou Array<string>
}

interface IMassageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMassageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMassageDTO) {
    console.log(`email enviado para ${to.email} ${message.subject}`);
  }
}

export default EmailService;
