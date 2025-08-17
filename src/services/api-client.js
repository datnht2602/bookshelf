const BASE_URL = 'https://www.googleapis.com/books/v1/';

async function fetchBooks(query, controller) {
    try {
        const response = await fetch(`${BASE_URL}volumes?q=${query}&maxResults=40`, {
            signal: controller.signal
        });

        if(response.ok) {
            const data = await response.json();
            return data.items || [];
        }
        throw new Error(`Network response was not ok ${response.status}`);
    } catch (error) {
        if(error.name === 'AbortedError') {
            console.error('Fetch aborted:', error);
        }else{
            console.error('Fetch error:', error.message);
            throw error;
        }
    }
}

export default fetchBooks;