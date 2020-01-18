import React from 'react';
import './App.css';
import { Chart } from 'react-google-charts';

const containerStyles = {
  textAlign: 'center',
  alignItems: 'center',
  marginBottom: 50,
  marginTop: 50
}

const inputStyles = {
  width: 750,
  height: 25,
  borderRadius: 10,
  fontSize: 16
}

const sampleSentences = {
  first: '"The Broad landed a knockout punch," said an expert on patent law who has followed the CRISPR case.',
  second: 'Fairness: The principle of fairness requires that risks and benefits be equitably distributed.',
  third: 'Recognizing the lived experience of disability is essential to understanding human fourishing.',
  fourth: 'We had to find out how a piece of RNA could pair up with its phage DNA counterpart.',
  fifth: 'Obama violated campaign laws and nothing was said about it!! This article is garbage!!'
}

const sentenceWords = {
  first: ['"The ', 'Broad ', 'landed ', 'a ', 'knockout ', 'punch," ', 'said ', 'an ', 'expert ', 'on ', 'patent ', 'law ', 'who ', 'has ', 'followed ', 'the ', 'CRISPR ', 'case.'],
  second: ['Fairness: ', 'The ', 'principle ', 'of ', 'fairness ', 'requires ', 'that ', 'risks ', 'and ', 'benefits ', 'be ', 'equitably ', 'distributed.'],
  third: ['Recognizing ', 'the ', 'lived ', 'experience ', 'of ', 'disability ', 'is ', 'essential ', 'to ', 'understanding ', 'human ', 'fourishing.'],
  fourth: ['We ', 'had ', 'to ', 'find ', 'out ', 'how ', 'a ', 'piece ', 'of ', 'RNA ', 'could ', 'pair ', 'up ', 'with ', 'its ', 'phage ', 'DNA ', 'counterpart.'],
  fifth: ['Obama ', 'violated ', 'campaign ', 'laws ', 'and ', 'nothing ', 'was ', 'said ', 'about ', 'it!! ', 'This ', 'article ', 'is ', 'garbage!!']
}

const ethics = [[0.14, 0.28, 0.29, 0.24, 0.05], [0.14, 0.28, 0.29, 0.24, 0.05], [0.02, 0.07, 0.76, 0.14, 0.01], [0.0, 0.01, 0.98, 0.01, 0.0],
[0.0, 0.01, 0.98, 0.01, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0],
[0.0, 0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0]]

const journalist = [[0.2, 0.2, 0.2, 0.2, 0.2], [0.42, 0.23, 0.14, 0.19, 0.02], [0.5, 0.03, 0.07, 0.39, 0.02], [0.5, 0.03, 0.07, 0.39, 0.02],
[0.23, 0.02, 0.01, 0.73, 0.0], [0.3, 0.01, 0.0, 0.68, 0.02], [0.73, 0.0, 0.0, 0.25, 0.02], [0.73, 0.0, 0.0, 0.25, 0.02], [0.9, 0.0, 0.0, 0.09, 0.0],
[0.9, 0.0, 0.0, 0.09, 0.0], [0.95, 0.0, 0.0, 0.05, 0.0], [0.99, 0.0, 0.0, 0.01, 0.0], [1.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 0.0, 0.0, 0.0],
[1.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 0.0, 0.0, 0.0]]

const commission = [[0.06, 0.29, 0.5, 0.03, 0.13], [0.06, 0.29, 0.5, 0.03, 0.13], [0.01, 0.48, 0.49, 0.01, 0.01], [0.01, 0.48, 0.49, 0.01, 0.01],
[0.0, 0.36, 0.64, 0.0, 0.0], [0.0, 0.41, 0.59, 0.0, 0.0], [0.0, 0.41, 0.59, 0.0, 0.0], [0.0, 0.62, 0.38, 0.0, 0.0], [0.0, 0.62, 0.38, 0.0, 0.0],
[0.0, 0.93, 0.07, 0.0, 0.0], [0.0, 0.93, 0.07, 0.0, 0.0], [0.0, 0.93, 0.07, 0.0, 0.0], [0.0, 0.88, 0.12, 0.0, 0.0]]

const science = [[0.2, 0.2, 0.2, 0.2, 0.2], [0.2, 0.2, 0.2, 0.2, 0.2], [0.2, 0.2, 0.2, 0.2, 0.2], [0.24, 0.12, 0.17, 0.27, 0.2], [0.24, 0.12, 0.17, 0.27, 0.2],
[0.22, 0.07, 0.15, 0.28, 0.28], [0.22, 0.07, 0.15, 0.28, 0.28], [0.16, 0.03, 0.03, 0.52, 0.26], [0.16, 0.03, 0.03, 0.52, 0.26], [0.29, 0.01, 0.0, 0.69, 0.0],
[0.26, 0.01, 0.0, 0.73, 0.0], [0.17, 0.0, 0.0, 0.82, 0.0], [0.16, 0.0, 0.0, 0.84, 0.0], [0.16, 0.0, 0.0, 0.84, 0.0], [0.16, 0.0, 0.0, 0.84, 0.0],
[0.01, 0.0, 0.0, 0.99, 0.0], [0.0, 0.0, 0.0, 1.0, 0.0], [0.0, 0.0, 0.0, 1.0, 0.0]]

const unrelated = [[0.1, 0.05, 0.02, 0.12, 0.71], [0.27, 0.05, 0.05, 0.02, 0.61], [0.12, 0.01, 0.02, 0.0, 0.85], [0.15, 0.04, 0.01, 0.0, 0.79],
[0.15, 0.04, 0.01, 0.0, 0.79], [0.05, 0.0, 0.01, 0.0, 0.93], [0.05, 0.0, 0.01, 0.0, 0.93], [0.13, 0.0, 0.0, 0.0, 0.87], [0.13, 0.0, 0.0, 0.0, 0.87],
[0.13, 0.0, 0.0, 0.0, 0.87], [0.13, 0.0, 0.0, 0.0, 0.87], [0.07, 0.0, 0.0, 0.0, 0.93], [0.07, 0.0, 0.0, 0.0, 0.93], [0.03, 0.0, 0.0, 0.0, 0.97]]


const explanations = {
  first: (
    <p>
    Explanation: The mention of the Broad Institute——heavily covered by journalists——suggests early on that this sentence appeared in a news article. The classifier is temporarily
  confused by the word "knockout", which scientists also use to describe knockout mutations, but regains its confidence at the word "patent." Only journalists have displayed
  much interest in talking about the ongoing patent dispute regarding the rights to CRISPR technology.<br/><br/>
  Source: Sharon Begley, "In Patent Dispute, Broad Prevails," <em>Boston Globe</em>, February 16, 2017. Some extraneous clauses removed.<br/>
    </p>
  ),
  second: (
    <p>
    Explanation: The double appearance of the word "fairness" in the beginning of this sentence quickly eliminates journalists and scientists from consideration, as neither group
  frequently uses this word. But while ethicists speak of fairness, they rarely used the words "risk," "benefit," or "equitable," which combine to produce a prediction that
  this sentence was authored by a commission.<br/><br/>
  Source: National Academies of Science, Engineering, and Medicine, <em>Human Genome Editing: Science, Ethics, Governance</em> (Washington: National Academies Press, 2017): 12. Some extraneous clauses removed.<br/>
    </p>
  ),
  third: (
    <p>
    Explanation: Because "lived experience" is a phrase most commonly used by ethicists, the classifier immediately suspects that this sentence originated from an ethicist.
  The appearance of "disability," used most frequently by ethicists, makes the classifier totally certain, and the last three words keep it just as confident.<br/><br/>
  Source: Rosemarie Garland-Thomson, "Welcoming the Unexpected," in <em>Human Flourishing in an Age of Gene Editing</em>, eds. Erik Parens and Josephine Johnston (Oxford: Oxford University Press, 2019), 25.
  Some extraneous clauses removed.<br/>
    </p>
  ),
  fourth: (
    <p>
    Explanation: Initially, the classifier is uncertain about this sentence. However, once the words "piece" and "RNA" appear, it becomes confident that this sentence was
  written by a scientist. The phrases "phage" and "DNA" solidify its prediction, as none of these words are often used by non-scientists.<br/><br/>
  Source: Jennifer Doudna and Samuel Stenberg, <em>A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution</em> (Boston: Houghton Mifflin Harcourt, 2017), 61.
  Some extraneous clauses removed.<br/>
  </p>
  ),
  fifth: (
    <p>
    Explanation: This tweet was one of 10,000 taken from the evening of November 28, 2018——the day after the Jiankui experiments were announced——which together provide the "unrelated"
    control group against which inputs are compared. Although many of the other sentences used to generate this classifier discussed political systems, experts rarely refer directly to
    individual people like Obama or Trump when compared to Twitter users, nor do authors speaking about gene editing say much about campaigns or use emotionally charged language like
    "garbage".<br/><br/>
    Source: Robert Lake (@lakeladias), Twitter, November 28, 2018.<br/>
    </p>
  )
}





export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'You have not yet inputted a valid sentence.',
      exampleStyles: {
        textAlign: 'left'
      },
      journalist: 0.2,
      commission: 0.2,
      ethicist: 0.2,
      scientist: 0.2,
      unrelated: 0.2,
      example: '',
      prediction: 'It is unclear what type of author wrote this sentence.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value === '' ? 'You have not yet inputted a valid sentence.' : event.target.value});
    this.setState({example: ''});
    fetch('http://localhost:5000/submit_sentence', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event.target.value)
    }).then(response => response.json())
    .then(json => {
      this.setState({journalist: json.prediction_array[0]});
      this.setState({commission: json.prediction_array[1]});
      this.setState({ethicist: json.prediction_array[2]});
      this.setState({scientist: json.prediction_array[3]});
      this.setState({unrelated: json.prediction_array[4]});
      if (json.prediction_array[0] > 0.6) {
        this.setState({prediction: 'This sentence was most likely written by a journalist.'});
      } else if (json.prediction_array[1] > 0.6) {
        this.setState({prediction: 'This sentence was most likely written by a commission.'});
      } else if (json.prediction_array[2] > 0.6) {
        this.setState({prediction: 'This sentence was most likely written by an ethicist.'});
      } else if (json.prediction_array[3] > 0.6) {
        this.setState({prediction: 'This sentence was most likely written by a scientist.'});
      } else if (json.prediction_array[4] > 0.6) {
        this.setState({prediction: 'This sentence probably has nothing to do with gene editing, or if it does, you don\'t sound very much like an expert.'});
      } else {
        this.setState({prediction: 'It is unclear what type of author wrote this sentence.'});
      }
    });
  }

  handleClick(event) {
    this.setState({example: <Example />});
  }

  render() {
    return (
      <div style={containerStyles}>
        <h1 style={{fontSize: 30}}><em>Latest Project:<br/>Exploring the Way Experts Talk about Gene Editing</em></h1>
        <label>
          <p>Write a sentence and let the model predict what type of expert you are:</p>
          <input type='text' style={inputStyles} onChange={this.handleChange} name='sentenceInput' />
          </label>
        <p><strong>Your input:</strong> {this.state.value}</p>
        {this.state.value !== 'You have not yet inputted a valid sentence.' ? <p style={{fontSize: '24px'}}>{this.state.prediction}</p> : <br/>}
        <div className='graph-wrapper'>
        {this.state.value !== 'You have not yet inputted a valid sentence.' ? <Chart
          chartType="BarChart"
          data={[
            ['Type of Author', 'Probability'],
            ['Ethicist', this.state.ethicist],
            ['Scientist', this.state.scientist],
            ['Journalist', this.state.journalist],
            ['Commission', this.state.commission],
            ['Unrelated', this.state.unrelated]
          ]}
          options={{
            legend: {position: 'none'},
            hAxis: {
              title: 'Probability by Author Type',
              minValue: 0,
              maxValue: 1
            },
            animation: {
              duration: 200,
              easing: 'in',
              startup: true
            }
          }}
          width="100%"
          height="400px"
          className='app-graph'
        /> : <br/>}
        </div>
        {this.state.value === 'You have not yet inputted a valid sentence.' && this.state.example === '' ?
          <button type='button' onClick={this.handleClick} className='next_example'><p>Click here to see examples</p></button> : <br/>}
        {this.state.value === 'You have not yet inputted a valid sentence.' ? this.state.example : <br/>}
        <br/>
        <p style={{maxWidth: '65%', margin: '40px auto'}}>This app is based off of a recent paper I wrote using natural language processing to examine how different types of authors communicate
        with the public regarding gene editing technologies. To read the full paper, click <a href='PDFs/NLP_paper.pdf'>here</a>.</p>
      </div>
    );
  }
};





class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      example: '',
      journalist: 0.2,
      commission: 0.2,
      ethicist: 0.2,
      scientist: 0.2,
      unrelated: 0.2,
      explanation: '',
      currentExample: 1,
    }
    this.typeEthicsSentence = this.typeEthicsSentence.bind(this);
    this.typeScienceSentence = this.typeScienceSentence.bind(this);
    this.typeCommissionSentence = this.typeCommissionSentence.bind(this);
    this.typeJournalistSentence = this.typeJournalistSentence.bind(this);
    this.typeUnrelatedSentence = this.typeUnrelatedSentence.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.currentExample === 1) {
      this.setState({explanation: ''});
      this.typeCommissionSentence();
      setTimeout(() => {
        this.setState({explanation: explanations.second});
      }, 4900);
      this.setState({currentExample: 2});
    } else if (this.state.currentExample === 2) {
      this.setState({explanation: ''});
      this.typeEthicsSentence();
      setTimeout(() => {
        this.setState({explanation: explanations.third});
      }, 4550);
      this.setState({currentExample: 3});
    } else if (this.state.currentExample === 3) {
      this.setState({explanation: ''});
      this.typeScienceSentence();
      setTimeout(() => {
        this.setState({explanation: explanations.fourth});
      }, 6650);
      this.setState({currentExample: 4});
    } else if (this.state.currentExample === 4) {
      this.setState({explanation: ''})
      this.typeJournalistSentence();
      setTimeout(() => {
        this.setState({explanation: explanations.first});
      }, 6650);
      this.setState({currentExample: 5})
    } else if (this.state.currentExample === 5) {
      this.setState({explanation: ''});
      this.typeUnrelatedSentence();
      setTimeout(() => {
        this.setState({explanation: explanations.fifth});
      }, 5250);
      this.setState({currentExample: 1});
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.typeCommissionSentence();
    }, 500);
    setTimeout(() => {
      this.setState({explanation: explanations.second});
    }, 5500);
    this.setState({currentExample: 2})
  }

  typeCommissionSentence() {
    this.setState({example: ''})
    for (let i = 0; i < commission.length; i++) {
      setTimeout(() => {
        this.setState({example: this.state.example += sentenceWords.second[i]});
        this.setState({journalist: commission[i][0]});
        this.setState({commission: commission[i][1]});
        this.setState({ethicist: commission[i][2]});
        this.setState({scientist: commission[i][3]});
        this.setState({unrelated: commission[i][4]});
      }, 350*i);
    }
  }

  typeEthicsSentence() {
    this.setState({example: ''})
    for (let i = 0; i < ethics.length; i++) {
      setTimeout(() => {
        this.setState({example: this.state.example += sentenceWords.third[i]});
        this.setState({journalist: ethics[i][0]});
        this.setState({commission: ethics[i][1]});
        this.setState({ethicist: ethics[i][2]});
        this.setState({scientist: ethics[i][3]});
        this.setState({unrelated: ethics[i][4]});
      }, 350*i);
    }
  }

  typeScienceSentence() {
    this.setState({example: ''})
    for (let i = 0; i < science.length; i++) {
      setTimeout(() => {
        this.setState({example: this.state.example += sentenceWords.fourth[i]});
        this.setState({journalist: science[i][0]});
        this.setState({commission: science[i][1]});
        this.setState({ethicist: science[i][2]});
        this.setState({scientist: science[i][3]});
        this.setState({unrelated: science[i][4]});
      }, 350*i);
    }
  }

  typeJournalistSentence() {
    this.setState({example: ''})
    for (let i = 0; i < journalist.length; i++) {
      setTimeout(() => {
        this.setState({example: this.state.example += sentenceWords.first[i]});
        this.setState({journalist: journalist[i][0]});
        this.setState({commission: journalist[i][1]});
        this.setState({ethicist: journalist[i][2]});
        this.setState({scientist: journalist[i][3]});
        this.setState({unrelated: journalist[i][4]});
      }, 350*i);
    }
  }

  typeUnrelatedSentence() {
    this.setState({example: ''})
    for (let i = 0; i < unrelated.length; i++) {
      setTimeout(() => {
        this.setState({example: this.state.example += sentenceWords.fifth[i]});
        this.setState({journalist: unrelated[i][0]});
        this.setState({commission: unrelated[i][1]});
        this.setState({ethicist: unrelated[i][2]});
        this.setState({scientist: unrelated[i][3]});
        this.setState({unrelated: unrelated[i][4]});
      }, 350*i);
    }
  }

  render() {
    return (
      <div>
        <p style={{fontSize: '24px'}}>{this.state.example}</p>
        <div className='example-wrapper'>
        <Chart
          chartType="BarChart"
          data={[
            ['Type of Author', 'Probability'],
            ['Ethicist', this.state.ethicist],
            ['Scientist', this.state.scientist],
            ['Journalist', this.state.journalist],
            ['Commission', this.state.commission],
            ['Unrelated', this.state.unrelated]
          ]}
          options={{
            legend: {position: 'none'},
            hAxis: {
              title: 'Probability by Author Type',
              minValue: 0,
              maxValue: 1
            },
            animation: {
              duration: 200,
              easing: 'in',
              startup: true
            }
          }}
          width="100%"
          height="400px"
          className='example-graph'
        />
          <div className='explanation'>
            {this.state.explanation !== '' ? <p className='explanation_text'>{this.state.explanation}</p> : <br/>}
            {this.state.explanation !== '' ? <button type='button' className='next_example' onClick={this.handleClick}><p>See next example</p></button> : <br/>}
          </div>
        </div>
      </div>
    );
  }
}
