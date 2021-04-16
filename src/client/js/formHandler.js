import { isURL } from "./checkURL";

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const url = document.getElementById("article-url").value;

  if (isURL(url)) {
    const data = await postData("http://localhost:8081/add", { url });

    //UI elements update

    document.getElementById("agreement").innerHTML = data.agreement;
    document.getElementById("subjectivity").innerHTML = data.subjectivity;
    document.getElementById("confidence").innerHTML = data.confidence;
    document.getElementById("irony").innerHTML = data.irony;
    document.getElementById("score_tag").innerHTML = data.score_tag;
  } else {
    alert("ERROR: Please enter a valid URL");
    return;
  }
};

export { handleSubmit };
