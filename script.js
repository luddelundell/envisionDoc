const toggleDark = () => {
    document.body.classList.toggle('dark');
}

const symbols = [
    {
        symbol: 'accordion',
        displayName: 'Accordion',
        description: 'The Accordion component toggles the visibility of content sections, allowing users to expand or collapse them.',
        section: 'components'
    },
    {
        symbol: 'alert',
        displayName: 'Alert',
        description: 'The Alert component displays brief, important messages to users, with variations for success, warning, danger, and info alerts.',
        section: 'components'
    },
    {
        symbol: 'badge',
        displayName: 'Badge',
        description: 'User the Badge component to display small labels for status, notifications, or event counts.',
        section: 'components'
    },
    {
        symbol: 'breadcrumbs',
        displayName: 'Breadcrumbs',
        description: "Use breadcrumbs to display the user´s location within a site’s hierarchy, enhancing navigation.",
        section: 'components'
    },
    {
        symbol: 'cards',
        displayName: 'Cards',
        description: 'Cards are simple containers for displaying information about pages, groups, or users.',
        section: 'components'
    },
    {
        symbol: 'collapse',
        displayName: 'Collapse',
        description: 'The Collapse component toggles content visibility, allowing sections to expand or collapse as needed.',
        section: 'components'
    },
    {
        symbol: 'dialog',
        displayName: 'Dialog',
        description: 'Use Dialog to present modal dialogs with customizable sizes, animations, and focus management.',
        section: 'components'
    },
    {
        symbol: 'dropdown',
        displayName: 'Dropdown',
        description: 'Dropdowns displays a list of options that appears upon user interaction.',
        section: 'components'
    },
    {
        symbol: 'embedded',
        displayName: 'Embedded',
        description: 'The Embedded component displays images and text with flexible layouts and overlay options.',
        section: 'components'
    },
    {
        symbol: 'feed',
        displayName: 'Feed',
        description: 'The Feed component is used to present user activity chronologically.',
        section: 'components'
    },
    {
        symbol: 'image-viewer',
        displayName: 'Image viewer',
        description: 'The Image Viewer component displays slideshows and lightbox galleries with navigation controls.',
        section: 'components'
    },
    {
        symbol: 'list',
        displayName: 'List',
        description: 'The List component displays items in vertical or horizontal layouts, with optional dividers.',
        section: 'components'
    },
    {
        symbol: 'media',
        displayName: 'Media',
        description: 'The Media component is used to present user activity chronologically.',
        section: 'components'
    },
    {
        symbol: 'navigation',
        displayName: 'Navigation',
        description: 'The Navigation component provides  customizable menus for site navigation, including menubars and side navigation.',
        section: 'components'
    },
    {
        symbol: 'news-item',
        displayName: 'News Item',
        description: 'The News Item component presents news content with images and text in a structured layout.',
        section: 'components'
    },    
    {
        symbol: 'pagination',
        displayName: 'Pagination',
        description: 'The Pagination component provides accessible navigation for multi-page content, with customizable alignment and sizing options.',
        section: 'components'
    },        
    {
        symbol: 'popover',
        displayName: 'Popover',
        description: 'Popovers displays contextual overlays with customizable content, positioning, and trigger options.',
        section: 'components'
    },  
    {
        symbol: 'profile-image',
        displayName: 'Profile Image',
        description: 'The Profile Image component displays images with fixed or responsive sizes.',
        section: 'components'
    },    
    {
        symbol: 'progress-indicator',
        displayName: 'Progress Indicator',
        description: 'The Progress Indicator component displays progress with customizable colors, labels, and animations.',
        section: 'components'
    },    
    {
        symbol: 'spinner',
        displayName: 'Spinner',
        description: 'The Spinner component displays loading animations with standard or bounce styles and optional delays.',
        section: 'components'
    },    
    {
        symbol: 'tab',
        displayName: 'Tab',
        description: 'The Tab component organizes content into sections, displaying one panel at a time.',
        section: 'components'
    },   
    {
        symbol: 'table',
        displayName: 'Table',
        description: 'Use a Table to display data in rows and columns, with customizable styles and responsive layouts.',
        section: 'components'
    },    
    {
        symbol: 'toast',
        displayName: 'Toast',
        description: 'Use the Toast component to display brief, customizable notifications to inform users of system events.',
        section: 'components'
    },    
    {
        symbol: 'tooltip',
        displayName: 'Tooltip',
        description: 'Use Tooltip to display brief, informative messages when users hover over or focus on elements.',
        section: 'components'
    },
        {
        symbol: 'basic-colors',
        displayName: 'Basic colors',
        description: 'The “Basic colors” section defines general colors for backgrounds, text, links, and borders.',
        section: 'colors'
    },        
    {
        symbol: 'block-colors',
        displayName: 'Block colors',
        description: 'The “Block colors” section offers preset color combinations for large content areas.',
        section: 'colors'
    },
    {
        symbol: 'brand-colors',
        displayName: 'Brand colors',
        description: 'The “Brand Colors” section defines primary brand hues with contrast-friendly shades for accessibility.',
        section: 'colors'
    },
    {
        symbol: 'element-colors',
        displayName: 'Element colors',
        description: 'The “Element Colors” section defines specific shades for buttons, icons, and interactive elements.',
        section: 'colors'
    },  
    {
        symbol: 'status-colors',
        displayName: 'Status colors',
        description: 'The “Status Colors” section provides distinct hues representing success, warnings, errors, and informational states.',
        section: 'colors'
    },
    {
        symbol: 'button',
        displayName: 'Button',
        description: 'Button provides interactive elements with various styles, sizes, and icon options.',
        section: 'forms'
    },    
    {
        symbol: 'button-group',
        displayName: 'Button Group',
        description: 'Button Group groups related buttons together, providing a unified interface for multiple actions.',
        section: 'forms'
    },    
    {
        symbol: 'form-elements',
        displayName: 'Form Elements',
        description: 'Form elements structures user inputs with labels, controls, and consistent spacing.',
        section: 'forms'
    },    
    {
        symbol: 'range-slider',
        displayName: 'Range Slider',
        description: 'The Range Slider component lets users select a value or range with customizable intervals and limits.',
        section: 'forms'
    },    
    {
        symbol: 'tag-select',
        displayName: 'Tag Select',
        description: 'Tag Select enables customizable multi-select interfaces with cross-browser support and styling.',
        section: 'forms'
    },    
    {
        symbol: 'card-holder',
        displayName: 'Card Holder',
        description: 'A Cardholder utilizes flexbox to create a responsive card grid that adapts to available space.',
        section: 'layout'
    }, 
    {
        symbol: 'container',
        displayName: 'Container',
        description: 'The Container utility establishes a containment context for applying container query at-rules.',
        section: 'layout'
    },    
    {
        symbol: 'flexbox',
        displayName: 'Flexbox',
        description: 'Use the Flexbox utility to provide classes for flexible layouts, including direction, alignment, and wrapping.',
        section: 'layout'
    },
    {
        symbol: 'basic-text',
        displayName: 'Basic text',
        description: 'The Basic Text utility offers classes for headings, alignment, transformations, status colors, and links.',
        section: 'typography'
    },
    {
        symbol: 'content-text',
        displayName: 'Content text',
        description: 'Organically grow the holistic worldview of disruptive innovation through workplace diversity and empowerment.',
        section: 'typography'
    },
    {
        symbol: 'dynamic-font-size',
        displayName: 'Dynamic font-size',
        description: 'The Dynamic Font Size utility scales an element’s base font size based on container width.',
        section: 'typography'
    },
    {
        symbol: 'ui-text',
        displayName: 'UI-text',
        description: 'UI Text provides standardized styles for headings and text across templates, components, and applications.',
        section: 'typography'
    },    
    {
        symbol: 'assistive-text',
        displayName: 'Assistive text',
        description: 'Assistive text provides helpful context, guidance, or feedback for improved accessibility and user understanding.',
        section: 'utils'
    },
{
        symbol: 'borders',
        displayName: 'Borders',
        description: 'Use the Borders utility to set or remove borders',
        section: 'utils'
    },
{
        symbol: 'css-variables',
        displayName: 'CSS-variables',
        description: 'CSS Variables utility offers predefined custom properties for consistent styling across components.',
        section: 'utils'
    },
{
        symbol: 'display',
        displayName: 'Display',
        description: 'The Display utility provides classes to set an element’s display property, such as inline, block, flex, inline-block, inline-flex, or none.',
        section: 'utils'
    },
    {
        symbol: 'shadows',
        displayName: 'Shadows',
        description: 'Use the Shadows utility classes to apply various sized shadows to elements.',
        section: 'utils'
    },
    {
        symbol: 'sizing',
        displayName: 'Sizing',
        description: 'The Sizing utility offers classes to define elements’ width and height using preset values.',
        section: 'utils'
    },
    {
        symbol: 'spacing',
        displayName: 'Spacing',
        description: 'The Spacing utility provides classes for consistent margin and padding adjustments across elements.',
        section: 'utils'
    },
    {
        symbol: 'vertical-alignment',
        displayName: 'Vertical alignment',
        description: 'The Vertical Alignment utility offers classes to align elements: baseline, top, middle, bottom, text-top, and text-bottom.',
        section: 'utils'
    },    
    {
        symbol: 'db-basics',
        displayName: 'Basics',
        description: 'Organically grow the holistic worldview of disruptive innovation through workplace diversity and empowerment.',
        section: 'dashboard'
    },
    {
        symbol: 'db-responsive-widgets',
        displayName: 'Responsive widgets',
        description: 'Organically grow the holistic worldview of disruptive innovation through workplace diversity and empowerment.',
        section: 'dashboard'
    },
    {
        symbol: 'db-widget-colors',
        displayName: 'Widget colors',
        description: 'Organically grow the holistic worldview of disruptive innovation through workplace diversity and empowerment.',
        section: 'dashboard'
    },
    {
        symbol: 'db-widget-components',
        displayName: 'Widget components',
        description: 'Organically grow the holistic worldview of disruptive innovation through workplace diversity and empowerment.',
        section: 'dashboard'
    },
    {
        symbol: 'db-widget-css-variables',
        displayName: 'Widget CSS variables',
        description: 'Organically grow the holistic worldview of disruptive innovation through workplace diversity and empowerment.',
        section: 'dashboard'
    },
    {
        symbol: 'db-widget-typography',
        displayName: 'Widget typography',
        description: 'The widget theme uses Inter font family which has support for nine different weights 100-900.',
        section: 'dashboard'
    },
];






let render = '';
let section = '';
symbols.forEach((symbol) => {
    if (symbol.section !== section) {
        render +=`<h2>${symbol.section}</h2>`;
        section = symbol.section;
    }
render += `<div class="card">
        <div class="card__header">
            <svg class="symbol"><use href="symbols.svg#${symbol.symbol}"/></svg>
        </div>
        <div class="card__body">
            <h3>${symbol.displayName}</h3>
            <p>
                ${symbol.description}
            </p>
        </div>
    </div>`
});



const main = document.getElementById('main');
main.innerHTML = render;
