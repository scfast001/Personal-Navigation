document.addEventListener('DOMContentLoaded', () => {
    const linkContainer = document.getElementById('link-container');

    // --- 修改这里指向你的 JSON 文件 ---
    const dataUrl = '../data/links.json'; // 相对于 HTML 文件的路径

    fetch(dataUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            linkContainer.innerHTML = ''; // 清空加载提示
            data.forEach(category => {
                const categorySection = document.createElement('section');
                categorySection.classList.add('category');

                const categoryTitle = document.createElement('h2');
                categoryTitle.textContent = category.category;
                categorySection.appendChild(categoryTitle);

                const linkList = document.createElement('ul');
                linkList.classList.add('link-list');

                category.links.forEach(link => {
                    const listItem = document.createElement('li');
                    const anchor = document.createElement('a');
                    anchor.href = link.url;
                    anchor.textContent = link.name;
                    anchor.target = '_blank'; // 在新标签页打开
                    anchor.rel = 'noopener noreferrer';

                    // (可选) 添加图标
                    if (link.icon) {
                        const icon = document.createElement('img');
                        icon.src = link.icon;
                        icon.alt = `${link.name} icon`;
                        icon.classList.add('link-icon');
                        anchor.prepend(icon); // 将图标放在文字前面
                    }

                    listItem.appendChild(anchor);
                    linkList.appendChild(listItem);
                });

                categorySection.appendChild(linkList);
                linkContainer.appendChild(categorySection);
            });
        })
        .catch(error => {
            console.error('加载链接数据时出错:', error);
            linkContainer.innerHTML = '<p style="color: red;">加载链接失败，请检查控制台信息。</p>';
        });
});
