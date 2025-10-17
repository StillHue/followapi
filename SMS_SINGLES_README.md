# Sistema de Envio de SMS Único via n8n e Gateway Android

Este documento descreve como configurar um fluxo simples para enviar um único SMS usando n8n na nuvem e um gateway Android.

## 1️⃣ Estrutura do Sistema

```
[Frontend] --> [n8n Webhook] --> [Android Gateway / API SMS] --> [Destinatário]
```

- **Frontend**: Formulário web para informar o número e a mensagem
- **n8n Webhook**: Recebe os dados e dispara o SMS
- **Gateway Android**: Envia a mensagem real via celular

## 2️⃣ Frontend HTML

Arquivo: `frontend/single-sms.html`

Formulário simples para capturar número e mensagem do usuário.

**Configuração necessária:**
- Substitua `<SEU_N8N_WEBHOOK_URL>` pela URL do seu webhook n8n

## 3️⃣ Configuração do Fluxo n8n

Arquivo: `n8n/single-sms-flow.json`

Fluxo mínimo composto por:
- **Webhook Node**: Recebe dados POST com `{ "to": "+5511999999999", "message": "Olá!" }`
- **HTTP Request Node**: Envia para o gateway Android

**Configuração:**
- Substitua `IP_DO_ANDROID` pelo IP do seu dispositivo Android na rede

## 4️⃣ Gateway Android

Arquivo: `android-sms-gateway.js`

Servidor HTTP simples que roda no Android via Termux.

### Instalação no Android (Termux):

```bash
# Instalar dependências
pkg install nodejs termux-api

# Executar o gateway
node android-sms-gateway.js
```

### Pré-requisitos:
- Termux instalado no Android
- Termux:API instalado e com permissões
- Dispositivo conectado na mesma rede (WiFi)

## 5️⃣ Como Usar

1. **Execute o gateway Android:**
   ```bash
   node android-sms-gateway.js
   ```
   O servidor ficará disponível em `http://ANDROID_IP:8080/send`

2. **Configure o fluxo n8n:**
   - Importe `n8n/single-sms-flow.json`
   - Substitua `IP_DO_ANDROID` pelo IP real do Android
   - Ative o webhook

3. **Abra o frontend:**
   - Abra `frontend/single-sms.html` no navegador
   - Substitua `<SEU_N8N_WEBHOOK_URL>` pela URL do webhook
   - Preencha número e mensagem
   - Clique em "Enviar"

4. **Teste:**
   - O SMS será enviado automaticamente para o destinatário

## 6️⃣ Características

- ✅ Sistema simples e direto
- ✅ Sem necessidade de filas ou bancos de dados
- ✅ Fácil configuração
- ✅ Baixa latência
- ✅ Ideal para testes e uso ocasional

## 7️⃣ Segurança

- Use HTTPS no n8n para produção
- Considere adicionar autenticação no gateway se necessário
- Mantenha o dispositivo Android seguro

## 8️⃣ Resolução de Problemas

**Gateway não inicia:**
- Verifique se Termux:API está instalado
- Conceda permissões de SMS no Android

**SMS não enviado:**
- Verifique se o número está no formato correto
- Confirme se o dispositivo tem sinal e crédito

**Erro de conexão:**
- Verifique se Android e n8n estão na mesma rede
- Confirme o IP do Android
