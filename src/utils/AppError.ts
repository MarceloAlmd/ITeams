export class AppError {
  message: string;

  constructor (message: string) {
    this.message = message
  };
};

// o construtor é o primeiro a ser carregado quando a class é instanciada, e recebemos uma mensagem do tipo string nele e repassamos para o contexto global