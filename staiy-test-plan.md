## Goal

- Display the supplied JSON data in a table using the screenshot given as a guide.
- Design should be my own and not a replica of what Staiy currently has but the guidance is not to spend much time on it. 


## Plan

- Create a small react app with `npx create-react-app` 
  <!-- (n.b. For production I would use some framework like NextJS, or Vite/Snowpack rather than CRA as it can get slow on builds in prod down the line, lack of exposed config, eject issues, etc...) -->
- Install Storybook so different states and data can be explored
- Use AntD's {Table} component plus any other layout tooling
- Install `styled-components` so I can extend the design 
- Set out the column/row names and decide how I want the table to look 
- Pull in the JSON data 
- Probably have to format these ISO dates - if I want to do '{date} at {time}' like in the screenshot I would probably head for something like [date-fns](https://date-fns.org/v2.27.0/docs/format) to do that rather than parse and split it myself. 
<!-- Date/time is complex and has some pitfalls that are all explored and dealt with already by the package devs  -->
- See if there are any edge cases - I think the unicode characters in strings will be parsed automatically as accents etc. 
- Make sure table is usable on small devices
- Find some better display for order status 
- Enable filter and sorting on AntD 
- Check accessibility and colour contrast that it passes WCAG AA standards 
- Check the table is at least readable and naviagble with VoiceOver on mac 