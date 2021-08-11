function tabs(tabContentSelector, tabParentSelector, tabSelector, activeClass) {
    // tabs

    const tabContent = document.querySelectorAll(tabContentSelector),
        tabsParent = document.querySelector(tabParentSelector),
        tabs = document.querySelectorAll(tabSelector);

    hideTabs();
    showTabs();

    tabsParent.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target && target.classList.contains(tabSelector.slice(1))) {
            tabs.forEach((tab, i) => {
                if (tab == target) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });

    function hideTabs() {
        tabContent.forEach(tab => {
            tab.classList.remove('show', 'fade');
            tab.classList.add('hide');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabs(i = 0) {
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show', 'fade');

        tabs[i].classList.add(activeClass);
    }
}

export default tabs;