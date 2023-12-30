const API_URL = "https://Your-api-url-com";

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Inloggningsfel");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Här kan du hantera fel mer detaljerat om du vill
    throw error;
  }
};
