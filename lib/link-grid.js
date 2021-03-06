/* global hexo */

'use strict';

function linkGrid(args, content) {
	var links = content.split('\n').map(item => {
		var args = item.split('|').map(arg => arg.trim());
		if (args[0][0] === '%') return '';
		return `<div>
			<img src="${args[3] || "/images/avatar.gif"}" onerror="this.src='/images/avatar.gif';">
			<p>${args[0]}</p><p>${args[2] || args[1]}</p>
			<a href="${args[1]}"></a>
		</div>`;
	});
	return `<div class="link-grid">${links.join('')}</div>`;
}

module.exports = linkGrid;
