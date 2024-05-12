type AllEvents = 'click' | 'scroll' | 'mousemove'

type ExcludeEvent = Exclude<AllEvents, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling Event ${event}`);
};

handleEvent('click');
// handleEvent('scroll'); // Error
handleEvent('mousemove');