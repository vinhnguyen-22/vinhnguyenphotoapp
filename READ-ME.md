<div class="mermaid" style="background-color: black;">
    graph LR
        src---assets
        assets---images
        assets---styles(global styles)
        src---component(shared components)
        src---features
        features---Photo
        Photo---components  
        components---PhotoList
        components---PhotoCard
        components---PhotoForm
        Photo---pages
        pages---MainPage
        pages---AddEditPage
        Photo---photoSlice.js
        Photo---index.js
</div>
