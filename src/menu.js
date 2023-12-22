//contentSide div contains header
export const header = (function () {
  const header = document.createElement("h1");
  header.setAttribute(
    "style",
    "height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 30%;",
  );
  header.innerHTML = "PICKLE BURGER MENU";
  return header;
})();
export const menuTabPage = (function () {
  //two divs left and right,left =sidebar right = contentSide
  function imageMenu() {
    const imageMenu = document.createElement("div");
    imageMenu.classList.add("imageMenu");
    imageMenu.setAttribute(
      "style",
      "height:75vh;background-size:cover;loading:lazy;",
    );
    return imageMenu;
  }
  function div1() {
    const div1 = document.createElement("div");
    const div1Border = document.createElement("div");
    div1Border.setAttribute(
      "style",
      "height:60vh; margin-left:20%;width:30vw;padding:2rem;border:0.5rem #86efac solid;background-color:#c7d2fe;border-radius:5rem;",
    );
    const div1Img = document.createElement("div");
    div1Img.classList.add("div1Img");
    div1Img.setAttribute(
      "style",
      "margin:auto;background-position:center;background-size:cover; height:20rem;width:20rem;border-radius:2rem;",
    );

    div1.appendChild(div1Border);
    const div1Paragraph = document.createElement("p");
    div1Paragraph.setAttribute(
      "style",
      "color:black; font-family:helvetica;font-size:1.4rem;color:font-weight:900;margin-left:20%;",
    );
    div1Paragraph.innerHTML = "Cheese Burger";
    div1Border.appendChild(div1Paragraph);
    div1Border.appendChild(div1Img);
    div1.setAttribute(
      "style",
      "height:65vh;background-color:#e7e5e4;padding:4rem;padding-left:8rem;padding-bottom:7rem;",
    );
    return div1;
  }
  function div2() {
    const div2 = document.createElement("div");
    const div2Border = document.createElement("div");
    div2Border.setAttribute(
      "style",
      "height:60vh; margin-left:20%;width:30vw;padding:2rem;border:0.5rem #fb7185 solid;background-color:#78716c;border-radius:5rem;",
    );
    const div2Img = document.createElement("div");
    div2Img.classList.add("div2Img");
    div2Img.setAttribute(
      "style",
      "margin:auto;background-position:center;background-size:cover; height:20rem;width:20rem;border-radius:2rem;",
    );

    div2.appendChild(div2Border);
    const div2Paragraph = document.createElement("p");
    div2Paragraph.innerHTML = "Cherry Burger";
    div2Border.appendChild(div2Paragraph);
    div2Border.appendChild(div2Img);
    div2Paragraph.setAttribute(
      "style",
      "color:black; font-family:helvetica;font-size:1.4rem;color:font-weight:900;margin-left:20%;",
    );

    div2.setAttribute(
      "style",
      "height:65vh;background-color:#ede9fe;padding:4rem;padding-left:8rem;font-family:helvetica;font-size:1.4rem;font-weight:500;padding-bottom:7rem;",
    );
    return div2;
  }
  function div3() {
    const div3 = document.createElement("div");
    const div3Border = document.createElement("div");
    div3Border.setAttribute(
      "style",
      "height:60vh; margin-left:20%;width:30vw;padding:2rem;border:0.5rem #fb923c solid;background-color:#d9f99d;border-radius:5rem;",
    );
    const div3Img = document.createElement("div");
    div3Img.classList.add("div3Img");
    div3Img.setAttribute(
      "style",
      "margin:auto;background-position:center;background-size:cover; height:20rem;width:20rem;border-radius:2rem;",
    );

    div3.appendChild(div3Border);
    const div3Paragraph = document.createElement("p");
    div3Paragraph.innerHTML = "Hotdog burger";
    div3Border.appendChild(div3Paragraph);
    div3Border.appendChild(div3Img);
    div3Paragraph.setAttribute(
      "style",
      "color:black; font-family:helvetica;font-size:1.4rem;color:font-weight:900;margin-left:20%;",
    );

    div3.setAttribute(
      "style",
      "height:65vh;background-color:#f5f5f4;padding:4rem;padding-left:8rem;font-family:helvetica;font-size:1.4rem;font-weight:500;padding-bottom:7rem;",
    );

    return div3;
  }

  function footer() {
    const footer = document.createElement("footer");
    footer.setAttribute(
      "style",
      "background-color:#cbd5e1;height:10vh;border-radius:1rem;position:fixed;top:89vh;width:76.5vw;",
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
  contentDivsHolder.appendChild(imageMenu());
  contentDivsHolder.appendChild(div1());
  contentDivsHolder.appendChild(div2());

  contentDivsHolder.appendChild(div3());
  contentDivsHolder.appendChild(footer());
  contentDivsHolder.setAttribute(
    "style",
    "height:90%;margin:0; background-color:#cbd5e1;margin:0;",
  );
  return contentDivsHolder;
})();
