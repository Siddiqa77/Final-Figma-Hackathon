export const fetchMockApi = async () => {
  const mockApiUrl = "https://677e928694bde1c1252c8aac.mockapi.io/hackathon";

  try {
    const response = await fetch(mockApiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Mock API");
    }
    return await response.json();
    
  } catch (error) {
    console.error("Error fetching Mock API:", error);
    return [];
  }
};
