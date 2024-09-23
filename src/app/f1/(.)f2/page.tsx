

export default function InterceptedF2() {
  return (
    <p style={{fontSize:'20px'}}>
      This is the intercepted f2 route which is displayed right now. When user clicks the link in f1, <code>(.)f2</code> folder<br/>
      has precedence over normal <code>f2</code> folder. <strong>Rekoad the page or copy this url and open in new tab to <br/>see the orginal 
      f2 segment</strong><br/> 
      <h4 style={{color:'red'}}>
        folder structure is as follows:<br/>
        f1<br/>
        --     f2<br/>
        --     (.)f2
      </h4> 
    </p>
  )
}
