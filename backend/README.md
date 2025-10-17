# RCS Mass Sending API

API para envio de mensagens RCS (Rich Communication Services) em massa.

## Instalação

```bash
cd backend
npm install
```

## Configuração

1. Configure as variáveis de ambiente no arquivo `.env`:
   - `RCS_API_URL`: URL da API do provedor RCS
   - `RCS_API_KEY`: Chave da API RCS
   - `RCS_API_SECRET`: Segredo da API RCS

## Uso

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

## Endpoints

### Enviar mensagem única
```http
POST /api/rcs/send
Content-Type: application/json

{
  "phoneNumber": "+5511999999999",
  "message": "Olá! Esta é uma mensagem de teste RCS."
}
```

### Enviar mensagens em massa
```http
POST /api/rcs/send-bulk
Content-Type: application/json

{
  "recipients": [
    {
      "phone": "+5511999999999",
      "name": "João Silva"
    },
    {
      "phone": "+5511888888888",
      "name": "Maria Santos"
    }
  ],
  "message": "Olá! Esta é uma mensagem em massa RCS."
}
```

### Verificar status da mensagem
```http
GET /api/rcs/status/:messageId
```

## Integração com n8n

A API está preparada para receber webhooks do n8n através dos endpoints de envio de mensagens.
