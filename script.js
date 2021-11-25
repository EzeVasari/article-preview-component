const d = document,
    $btn = d.querySelector(".share-btn"),
    $shareData = d.querySelector(".share-data"),
    $author = d.querySelector(".author"),
    $authorData = d.querySelector(".author-data"),
    $pathBtn = d.querySelector(".path-icon-share");

$btn.addEventListener("click", (e) => {

    $shareData.classList.toggle("none");

    if (window.screen.availWidth >= 992) {
        $shareData.classList.toggle("share-bubble");
        $shareData.classList.toggle("bg-dark");
        $shareData.classList.toggle("opacity-1");
        $btn.classList.toggle("share-btn-dark");
        $pathBtn.classList.toggle("share-btn-dark");
    } else {
        $authorData.classList.toggle("none");
        $author.classList.toggle("bg-dark");
        $btn.classList.toggle("share-btn-dark");
        $pathBtn.classList.toggle("share-btn-dark");
    }

    
});
