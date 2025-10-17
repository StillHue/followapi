'use client'

import { useState } from 'react'
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress
} from '@mui/material'
import { Send, CheckCircle, Error } from '@mui/icons-material'
import axios from 'axios'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const API_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL || 'https://primary-production-31de.up.railway.app/webhook/followapi'

  const handleSendSMS = async () => {
    if (!phoneNumber || !message) {
      setError('Por favor, preencha o número do telefone e a mensagem.')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await axios.post(`${API_URL}/sms/send`, {
        to: phoneNumber,
        message
      })

      setResult(response.data)
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao enviar SMS')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        📱 SMS Sender
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4 }}>
        Envie SMS facilmente via API
      </Typography>

      <Paper elevation={3} sx={{ p: 3 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Número do Telefone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+5511999999999"
            variant="outlined"
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem aqui..."
            variant="outlined"
          />
        </Box>

        <Button
          variant="contained"
          size="large"
          onClick={handleSendSMS}
          disabled={loading || !phoneNumber || !message}
          startIcon={loading ? <CircularProgress size={20} /> : <Send />}
          fullWidth
        >
          {loading ? 'Enviando...' : 'Enviar SMS'}
        </Button>

        {result && (
          <Box sx={{ mt: 4 }}>
            <Alert
              severity={result.success ? "success" : "error"}
              icon={result.success ? <CheckCircle /> : <Error />}
            >
              {result.success ? (
                <Typography variant="body2">
                  ✅ SMS enviado com sucesso!
                </Typography>
              ) : (
                <Typography variant="body2">
                  ❌ Falha no envio: {result.error}
                </Typography>
              )}
            </Alert>
          </Box>
        )}
      </Paper>
    </Container>
  )
}
