


export const getGifs = async (category) => {
    const apiKey = 'd5dVqDKG5ohwi0FUtI1tPEWZ6Toidte6';
    const request = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`);
    const response = await request.json();

    return response.data.map( item => {
        return {
            id: item.id,
            url: item.images?.downsized_medium.url,
            title: item.title
        }
    });
};