export default function Head() {
  return (
    <>
      <title>Alan Obregon</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Alan Obregon's Website" />
      <link rel="icon" type="image/png" href="/favicon.png" />

      <script 
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3386160,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
        }}
      />
    </>
  )
}
