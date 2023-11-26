import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.css']
})
export class SearchCandidateComponent implements OnInit {

  public profiles:any = [
    {
      candidateName: 'Kunal Rode',
      description: "Note that we don't provide utility classes for justified text."
    },
    {
      candidateName: 'Kunal Rode',
      description: "Note that we don't provide utility classes for justified text."
    },
    {
      candidateName: 'Kunal Rode',
      description: "Note that we don't provide utility classes for justified text."
    },
    {
      candidateName: 'Kunal Rode',
      description: "Note that we don't provide utility classes for justified text."
    },
    {
      candidateName: 'Kunal Rode',
      description: "Note that we don't provide utility classes for justified text."
    },
    {
      candidateName: 'Kunal Rode',
      description: "Note that we don't provide utility classes for justified text."
    },
    {
      candidateName: 'Kunal Rode',
      description: "Note that we don't provide utility classes for justified text."
    },
    {
      candidateName: 'Kunal Rode',
      description: "Note that we don't provide utility classes for justified text."
    },
    {
      candidateName: 'Kunal Rode',
      description: "Note that we don't provide utility classes for justified text."
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
