import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

class RCSService {
  async sendSingleMessage(phoneNumber, message, options = {}) {
    try {
      const response = await axios.post(`${API_URL}/rcs/send`, {
        phoneNumber,
        message,
        options
      })
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Erro ao enviar mensagem')
    }
  }

  async sendBulkMessages(recipients, message, options = {}) {
    try {
      const response = await axios.post(`${API_URL}/rcs/send-bulk`, {
        recipients,
        message,
        options
      })
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Erro ao enviar mensagens em massa')
    }
  }

  async getMessageStatus(messageId) {
    try {
      const response = await axios.get(`${API_URL}/rcs/status/${messageId}`)
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Erro ao verificar status')
    }
  }

  // Método para integração com n8n via webhook
  async sendToN8N(data) {
    try {
      const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/rcs-mass-sending'
      const response = await axios.post(n8nWebhookUrl, data)
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Erro ao enviar para n8n')
    }
  }
}

export default new RCSService()
