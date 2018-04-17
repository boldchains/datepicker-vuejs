class Language{constructor(t,e,s,r){this.language=t,this.months=e,this.monthsAbbr=s,this.days=r,this.rtl=!1,this.ymd=!1}get language(){return this._language}set language(t){if("string"!=typeof t)throw new TypeError("Language must be a string");this._language=t}get months(){return this._months}set months(t){if(12!==t.length)throw new RangeError(`There must be 12 months for ${this.language} language`);this._months=t}get monthsAbbr(){return this._monthsAbbr}set monthsAbbr(t){if(12!==t.length)throw new RangeError(`There must be 12 abbreviated months for ${this.language} language`);this._monthsAbbr=t}get days(){return this._days}set days(t){if(7!==t.length)throw new RangeError(`There must be 7 days for ${this.language} language`);this._days=t}toJSON(){return{language:this.language,months:this.months,monthsAbbr:this.monthsAbbr,days:this.days,rtl:this.rtl,ymd:this.ymd}}}var pl=new Language("Polish",["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],["Nd","Pn","Wt","Śr","Czw","Pt","Sob"]);export default pl;
