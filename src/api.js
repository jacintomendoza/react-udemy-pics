import axios from 'axios';

const searchImages = async(searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 2V00ZbKgPAoLR25liJ8XUBE2zwQyWpEA0ukzfHCvXIQ',
        },
        params: {
            query: searchTerm,
        },
    });

    return response.data.results;
};

export default searchImages;