import axios from "axios";

export default async function handler(req, res) {
  const API_URL = 'https://ac-wjs-api-main.mangoforest-291de162.swedencentral.azurecontainerapps.io/api/crm/refresh-tokens';

  try {
    const response = await axios.post(API_URL, {
      userId: '68e3444c258779e592b4f2c0',
      type: 'crm',
      crmName: 'hubspot'
    });

    return res.status(200).json({
      message: "Token refreshed",
      data: response.data
    });

  } catch (err) {
    return res.status(500).json({
      message: "Error refreshing tokens",
      error: err.message
    });
  }
}
