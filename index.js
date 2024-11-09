import LLM from "@themaximalist/llm.js";

const faq = {
  "siapa pembuatmu": "Pembuat saya adalah syahdandev."
};

async function runLLM(question) {
  if (faq[question]) {
    console.log(faq[question]);
    console.log("Time taken: 0 ms (predefined answer)");
  } else {
    const startTime = Date.now(); // Start timing
    const response = await LLM(question, { 
      service: "together", 
      model: "LLaMA_CPP",
      endpoint: "http://103.59.94.43:8080/v1/chat/completions",
      apikey: "akucakep"
    });
    const endTime = Date.now(); // End timing
    const timeTaken = endTime - startTime;
    console.log(response);
    console.log(`Time taken: ${timeTaken} ms`);
  }
}

// Example usage
runLLM("siapa pembuatmu?");
