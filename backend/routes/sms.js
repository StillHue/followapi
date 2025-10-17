const express = require('express');
const { Vonage } = require('@vonage/server-sdk');
const router = express.Router();

// Initialize Vonage
const vonage = new Vonage({
  apiKey: process.env.SMS_API_KEY,
  apiSecret: process.env.SMS_API_SECRET
});

// SMS sending endpoint
router.post('/send', async (req, res) => {
  try {
    const { to, message } = req.body;

    // Validate input
    if (!to || !message) {
      console.log('Erro: Número ou mensagem ausente');
      return res.status(400).json({ error: 'Número e mensagem são obrigatórios' });
    }

    console.log(`Tentando enviar SMS para ${to}: ${message}`);

    // Send SMS via Vonage SDK
    const from = process.env.SMS_FROM || 'VonageSMS';
    await vonage.sms.send({ to, from, text: message })
      .then(resp => {
        console.log('SMS enviado com sucesso:', resp);
        res.status(200).json({
          success: true,
          message: 'SMS enviado com sucesso',
          data: resp
        });
      })
      .catch(err => {
        console.warn('Erro no Vonage:', err);
        res.status(500).json({
          error: 'Erro ao enviar SMS',
          details: err.message
        });
      });

  } catch (error) {
    console.error('Erro geral ao enviar SMS:', error.message);
    res.status(500).json({
      error: 'Erro interno do servidor',
      details: error.message
    });
  }
});

module.exports = router;
