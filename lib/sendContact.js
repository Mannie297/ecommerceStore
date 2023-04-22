
export const sendContactForm = async (data) => 
    fetch('/api/apiContact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"

    }, 
    }).then((response) => {
        return response.json();
        
        
    }).then((response) => {
        if(response.url) {
          window.location.assign(response.url);
          toast.loading('Redirecting...');

        }
    });
  