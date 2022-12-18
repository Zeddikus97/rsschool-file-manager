const logChunks = async (readable) => {
    for await (const chunk of readable) {
      console.log(chunk);
    }
}

export default logChunks;