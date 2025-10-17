# RCS Frontend

Interface web em Next.js para testar a API de envio de mensagens RCS em massa.

## Instalação

```bash
cd frontend
npm install
```

## Configuração

1. Configure as variáveis de ambiente no arquivo `.env.local`:
   - `NEXT_PUBLIC_API_URL`: URL da API RCS (ex: http://localhost:3001/api)
   - `NEXT_PUBLIC_N8N_WEBHOOK_URL`: URL do webhook do n8n (ex: http://localhost:5678/webhook/rcs-mass-sending)

## Uso

### Desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Produção
```bash
npm run build
npm start
```

## Funcionalidades

- **Envio de mensagem única**: Para testar mensagens individuais
- **Envio em massa**: Para testar campanhas com múltiplos destinatários
- **Interface responsiva**: Desenvolvida com Material-UI
- **Feedback em tempo real**: Mostra status de envio e resultados
- **Integração com n8n**: Pode enviar dados diretamente para webhooks do n8n

## Integração com n8n

O sistema pode enviar dados para o n8n através de webhooks. Configure o n8n para receber os dados nos endpoints apropriados e processe as mensagens RCS através da API backend.
