export async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    ); // Example API
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Handle errors gracefully
  }
}
