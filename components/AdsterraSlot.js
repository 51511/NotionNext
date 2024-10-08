const AdsterraSlot = ({ type = 'show' }) => {
  return (
    <ins className="adsbyadsterra"
         style={{ display: 'block', textAlign: 'center', width: '300px', height: '250px' }}
         data-ad-format="iframe">
      <script type="text/javascript">
        atOptions = {
          'key': '34cc9cdc1485e1ef477da647218111aa',
          'format': 'iframe',
          'height': 250,
          'width': 300,
          'params': {}
        };
      </script>
      <script type="text/javascript" src="//www.topcreativeformat.com/34cc9cdc1485e1ef477da647218111aa/invoke.js"></script>
    </ins>
  )
}

export { AdsterraSlot }
