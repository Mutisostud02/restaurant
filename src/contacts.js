//contentSide div contains header
export const contactHeader = (function () {
  const header = document.createElement("h1");
  header.setAttribute(
    "style",
    "height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 40%;",
  );
  header.innerHTML = "CONTACT US";
  return header;
})();
export const contactTabPage = (function () {
  //two divs left and right,left =sidebar right = contentSide

  function div1() {
    const div1 = document.createElement("div");
    const div1Border = document.createElement("div");
    div1Border.setAttribute(
      "style",
      "display:flex;justify-content:center;width:55vw;height:60vh; padding:2rem;border:2px #dcd7ee solid;background-color:#9ca3af;border-radius:5rem;",
    );
    div1.appendChild(div1Border);
    const div1Paragraph = document.createElement("p");
    div1Paragraph.setAttribute(
      "style",
      "font-family:helvetica;font-weight:bold;margin:7rem;color:#292524;font-size:1.4rem;color:font-weight:900;margin-left:20%;",
    );
    div1Paragraph.innerHTML =
      "We are located at Wale's Center n\
        Drive to the 3rd block under Belik House Shop numer 54.n\
        Click Below to Get our Location through Google Map.";
    div1Border.appendChild(div1Paragraph);
    div1.setAttribute(
      "style",
      "height:65vh; background:linear-gradient(30deg,#737373,#d4d4d4,#d4d4d8);padding:4rem;padding-left:8rem;padding-bottom:7rem;",
    );
    return div1;
  }
  function footer() {
    const footer = document.createElement("footer");
    footer.setAttribute(
      "style",
      "background-color:#737373;height:8vh;border-radius:1rem;position:fixed;color:white;top:91.5vh;width:76.5vw;",
    );
    function footerContent() {
      const footerContent = document.createElement("div");
      const footerP = document.createElement("p");
      const footerP2 = document.createElement("p");
      footerP.innerHTML = "Christopher Nthusi creations";
      footerP2.innerHTML = "@christophernthusi";
      footerContent.setAttribute(
        "style",
        "display:flex;justify-content:space-between;padding-left:2rem;padding-right:2rem;",
      );
      footerContent.appendChild(footerP);
      footerContent.appendChild(footerP2);
      return footerContent;
    }
    footer.appendChild(footerContent());
    return footer;
  }
  //contentSide div contains a div(contentDivs) with image and contents in multiple divs
  const contentDivsHolder = document.createElement("div");
  //contents in the contentDivs

  contentDivsHolder.appendChild(div1());
  contentDivsHolder.appendChild(footer());
  contentDivsHolder.setAttribute(
    "style",
    "height:90%;margin:0; background-color:#cbd5e1;margin:0;",
  );
  return contentDivsHolder;
})();
