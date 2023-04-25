function navbar(){
    return `
    <header>
        <div class="nav-wrapper">
            <div class="logo-container">
                <img class="logo" src="https://cdn4.buysellads.net/uu/1/62837/1587604228-cp-80x80.png" alt="Logo">
            </div>
            <nav>
                <input class="hidden" type="checkbox" id="menuToggle">
                <label class="menu-btn" for="menuToggle">
                    <div class="menu"></div>
                    <div class="menu"></div>
                    <div class="menu"></div>
                </label>
                <div class="nav-container">
                    <ul class="nav-tabs">
                        <li class="nav-tab">Home</li>
                        <li class="nav-tab">Products</li>
                        <li class="nav-tab">Services</li>
                        <li class="nav-tab">FAQ</li>
                        <li class="nav-tab">Contact</li>
                        <li class="nav-tab">Careers</li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
`
}

export default navbar;