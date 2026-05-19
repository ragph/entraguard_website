// Web3Forms submission helper.
// Get a free access key at https://web3forms.com and paste it below.
export const WEB3FORMS_ACCESS_KEY = 'e80fb588-de38-4e9c-ad95-ad71ae2e702f'

const ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Submits a FormData payload to Web3Forms.
 * @param {FormData} formData
 * @returns {Promise<boolean>} true if the message was delivered
 */
export async function submitForm(formData) {
  formData.append('access_key', WEB3FORMS_ACCESS_KEY)
  formData.append('from_name', 'EntraGuard Form')

  const res = await fetch(ENDPOINT, { method: 'POST', body: formData })
  const data = await res.json()
  return data.success === true
}
