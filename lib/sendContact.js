
export const sendContactForm = async (data) => 
    fetch('/api/apiContact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"

    }, 
    }).then((response) => {
        return response.json()  
            
    })
  