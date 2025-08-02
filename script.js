//your JS code here. If required.
function arrange(str){
	      return name.replace(/^(a |an |the )/i, '').trim();
    }

    const sortedBands = bands.sort((a, b) => {
      return arrange(a).localeCompare(arrange(b));
    });