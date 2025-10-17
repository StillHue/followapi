# RCS Mass Sending Project

Projeto completo para envio de mensagens RCS (Rich Communication Services) em massa com integração Next.js + API Backend + n8n.

## 📁 Estrutura do Projeto

```
follow-api/
├── backend/           # API REST para RCS
│   ├── routes/       # Rotas da API
│   ├── server.js     # Servidor principal
│   └── README.md     # Documentação do backend
├── frontend/         # Interface Next.js
│   ├── src/
│   │   ├── app/     # Páginas da aplicação
│   │   ├── components/  # Componentes React
│   │   └── services/    # Serviços da API
│   └── README.md    # Documentação do frontend
└── n8n/             # Configurações do n8n
    └── README.md    # Guia de integração
```

## 🚀 Funcionalidades

- ✅ **API Backend**: Servidor Express para processamento RCS
- ✅ **Interface Web**: Next.js com Material-UI para testes
- ✅ **Envio Único**: Teste mensagens individuais
- ✅ **Envio em Massa**: Processamento de múltiplos destinatários
- ✅ **Integração n8n**: Webhooks para automação
- ✅ **Feedback em Tempo Real**: Status de envio e resultados

## 🛠️ Instalação e Configuração

### 1. Backend API

```bash
cd backend
npm install
```

Configure o arquivo `.env`:
```env
PORT=3001
RCS_API_URL=https://api.rcsprovider.com
RCS_API_KEY=your_api_key
RCS_API_SECRET=your_api_secret
```

Inicie o servidor:
```bash
npm run dev  # Desenvolvimento
npm start    # Produção
```

### 2. Frontend Next.js

```bash
cd frontend
npm install
```

Configure o arquivo `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_N8N_WEBHOOK_URL=http://localhost:5678/webhook/rcs-mass-sending
```

Inicie a aplicação:
```bash
npm run dev  # Desenvolvimento
npm run build && npm start  # Produção
```

### 3. n8n (Opcional)

Para integração avançada, configure o n8n conforme documentado em `n8n/README.md`.

## 📖 Uso

### Interface Web

1. Acesse `http://localhost:3000`
2. Escolha entre "Enviar Única" ou "Enviar em Massa"
3. Preencha os dados (número/mensagem)
4. Clique em enviar e acompanhe os resultados

### API Endpoints

#### Enviar Mensagem Única
```http
POST /api/rcs/send
Content-Type: application/json

{
  "phoneNumber": "+5511999999999",
  "message": "Olá! Esta é uma mensagem RCS."
}
```

#### Enviar em Massa
```http
POST /api/rcs/send-bulk
Content-Type: application/json

{
  "recipients": [
    {
      "phone": "+5511999999999",
      "name": "João Silva"
    }
  ],
  "message": "Mensagem em massa via RCS"
}
```

## 🔄 Fluxo de Integração

```
Usuário → Frontend → n8n (Webhook) → Backend API → Provedor RCS
    ↑                                                      ↓
    └──────────────────── Resultados ←──────────────────────┘
```

## 🧪 Testes

1. **Backend**: Execute `npm test` (quando implementado)
2. **Frontend**: Acesse a interface web e teste os formulários
3. **Integração**: Use as ferramentas de desenvolvimento do navegador

## 🔧 Desenvolvimento

### Adicionar Novas Funcionalidades

- **Backend**: Adicione novas rotas em `backend/routes/`
- **Frontend**: Crie componentes em `frontend/src/components/`
- **n8n**: Configure novos workflows conforme necessidade

### Logs e Monitoramento

- Backend: Logs via Morgan middleware
- Frontend: Console do navegador
- n8n: Interface web do n8n

## 📝 Próximos Passos

- [ ] Implementar autenticação JWT
- [ ] Adicionar banco de dados para logs
- [ ] Implementar rate limiting avançado
- [ ] Adicionar métricas e dashboards
- [ ] Suporte a templates RCS avançados

## 🆘 Suporte

Para dúvidas ou problemas:
1. Verifique os logs do backend
2. Use as ferramentas de desenvolvedor do navegador
3. Consulte a documentação específica de cada componente

---

**Desenvolvido para facilitar o envio de mensagens RCS em massa com integração completa.**
