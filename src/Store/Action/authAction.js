import axios from "axios"

export const userRegistration = (data) => {
        return async (dispatch) => {

                const config = {
                        headers: {
                                'Content-Type': 'application/json'
                        }
                }

                try {
                        const response = await axios.post('/api/messenger/registration', data, config)
                }
                catch (error) {

                }
        }
}