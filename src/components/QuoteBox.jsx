
import { useEffect,useState } from "react"
import { BsTwitter } from "react-icons/bs"

function QuoteBox(){
    const [quoteInfo, setQuoteInfo] = useState({})

    useEffect(()=>{
        getQuote();
    },[])

    const getQuote = () =>{
        fetch('https://api.quotable.io/random')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setQuoteInfo({
                text: data.content,
                author: data.author,
            })
            console.log(data);
        });
    }

    return(
        <>
        <div className="container" id="quote-box">
        <p id="text"><h1 id="first">"</h1>{quoteInfo.text}<h1 id="last">"</h1></p>
        <h2 id="author">{quoteInfo.author}</h2>
        <button type="button" className="btn btn-dark" id="new-quote" onClick={getQuote}>New Quote</button>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><BsTwitter />  Tweet</a>
        </div>
        <div className="container-fluid">
            <p id="footer">©️ SoNiC</p>
        </div>
        </>
    )
}

export default QuoteBox