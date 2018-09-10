## Classes

<dl>
<dt><a href="#ValidationError">ValidationError</a></dt>
<dd></dd>
<dt><a href="#WrongNumberArgsError">WrongNumberArgsError</a> ⇐ <code><a href="#ValidationError">ValidationError</a></code></dt>
<dd></dd>
<dt><a href="#WrongTypeArgsError">WrongTypeArgsError</a> ⇐ <code><a href="#ValidationError">ValidationError</a></code></dt>
<dd></dd>
<dt><a href="#WrongValueArgsError">WrongValueArgsError</a> ⇐ <code><a href="#ValidationError">ValidationError</a></code></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#newLineAndTabsBuilder">newLineAndTabsBuilder</a> ⇒</dt>
<dd><p>Creates a string with a new line and as tabs
as it&#39;s been specified in the parameter</p>
</dd>
<dt><a href="#newLineAndSpacesBuilder">newLineAndSpacesBuilder</a> ⇒</dt>
<dd><p>Creates a string with a new line and as spaces
as it&#39;s been specified in the parameter</p>
</dd>
<dt><a href="#whiteSpaceBuilder">whiteSpaceBuilder</a> ⇒</dt>
<dd><p>generates white space depending as per argument passed</p>
</dd>
<dt><a href="#addTabSpaceOrBlank">addTabSpaceOrBlank</a> ⇒</dt>
<dd><p>calls a method depending the argument type
calls [newLineAndTabsBuilder, newLineAndSpacesBuilder, whiteSpaceBuilder] respectively</p>
</dd>
<dt><a href="#htmlCommentBuilder">htmlCommentBuilder</a> ⇒</dt>
<dd><p>Creates an html comment with possible tabs</p>
</dd>
<dt><a href="#dividerBuilder">dividerBuilder</a> ⇒</dt>
<dd><p>Some markup that could be used to differentiate
sections in CV, makes sense use it when rendering the markup</p>
</dd>
<dt><a href="#htmlTagBuilder">htmlTagBuilder</a> ⇒</dt>
<dd><p>creates html tags</p>
</dd>
<dt><a href="#isLastItem">isLastItem</a> ⇒</dt>
<dd><p>Checks if actual index is the last item in an Array</p>
</dd>
</dl>

<a name="ValidationError"></a>

## ValidationError
**Kind**: global class  
<a name="new_ValidationError_new"></a>

### new ValidationError()
Blueprint class for validation errors

<a name="WrongNumberArgsError"></a>

## WrongNumberArgsError ⇐ [<code>ValidationError</code>](#ValidationError)
**Kind**: global class  
**Extends**: [<code>ValidationError</code>](#ValidationError)  
<a name="new_WrongNumberArgsError_new"></a>

### new WrongNumberArgsError()
Error class for wrong number of arguments

<a name="WrongTypeArgsError"></a>

## WrongTypeArgsError ⇐ [<code>ValidationError</code>](#ValidationError)
**Kind**: global class  
**Extends**: [<code>ValidationError</code>](#ValidationError)  
<a name="new_WrongTypeArgsError_new"></a>

### new WrongTypeArgsError()
Error class for wrong type of arguments

<a name="WrongValueArgsError"></a>

## WrongValueArgsError ⇐ [<code>ValidationError</code>](#ValidationError)
**Kind**: global class  
**Extends**: [<code>ValidationError</code>](#ValidationError)  
<a name="new_WrongValueArgsError_new"></a>

### new WrongValueArgsError()
Error class for wrong value of arguments

<a name="newLineAndTabsBuilder"></a>

## newLineAndTabsBuilder ⇒
Creates a string with a new line and as tabs
as it's been specified in the parameter

**Kind**: global variable  
**Returns**: String  

| Param | Type |
| --- | --- |
| numberTabs | <code>Number</code> | 

<a name="newLineAndSpacesBuilder"></a>

## newLineAndSpacesBuilder ⇒
Creates a string with a new line and as spaces
as it's been specified in the parameter

**Kind**: global variable  
**Returns**: String  

| Param | Type | Default |
| --- | --- | --- |
| [numberSpaces] | <code>Number</code> | <code>6</code> | 

<a name="whiteSpaceBuilder"></a>

## whiteSpaceBuilder ⇒
generates white space depending as per argument passed

**Kind**: global variable  
**Returns**: String  

| Param | Type |
| --- | --- |
| numberSpaces | <code>Number</code> | 

<a name="addTabSpaceOrBlank"></a>

## addTabSpaceOrBlank ⇒
calls a method depending the argument type
calls [newLineAndTabsBuilder, newLineAndSpacesBuilder, whiteSpaceBuilder] respectively

**Kind**: global variable  
**Returns**: String  

| Param | Type | Description |
| --- | --- | --- |
| condition | <code>Boolean</code> |  |
| type | <code>String</code> | > tab, space or whiteSpace |
| counter | <code>Number</code> |  |

<a name="htmlCommentBuilder"></a>

## htmlCommentBuilder ⇒
Creates an html comment with possible tabs

**Kind**: global variable  
**Returns**: String  

| Param | Type | Default |
| --- | --- | --- |
| text | <code>string</code> |  | 
| [withTab] | <code>number</code> | <code>0</code> | 

<a name="dividerBuilder"></a>

## dividerBuilder ⇒
Some markup that could be used to differentiate
sections in CV, makes sense use it when rendering the markup

**Kind**: global variable  
**Returns**: String  

| Param | Type | Default |
| --- | --- | --- |
| [className] | <code>string</code> | <code>&quot;&#x27;divider&#x27;&quot;</code> | 

<a name="htmlTagBuilder"></a>

## htmlTagBuilder ⇒
creates html tags

**Kind**: global variable  
**Returns**: String  

| Param | Type | Default |
| --- | --- | --- |
| content | <code>\*</code> |  | 
| tag | <code>\*</code> |  | 
| [numberTabs] | <code>number</code> | <code>2</code> | 

<a name="isLastItem"></a>

## isLastItem ⇒
Checks if actual index is the last item in an Array

**Kind**: global variable  
**Returns**: Boolean  

| Param | Type |
| --- | --- |
| array | <code>Array</code> | 
| index | <code>Number</code> | 




## Members for Conetent Creators as templates

<dl>
<dt><a href="#headTemplate">headTemplate</a> ⇒</dt>
<dd><p>Head tag builder that contains most used meta tags</p>
</dd>
<dt><a href="#asideItemTemplate">asideItemTemplate</a> ⇒</dt>
<dd><p>Aside section template</p>
</dd>
<dt><a href="#summaryTemplate">summaryTemplate</a> ⇒</dt>
<dd><p>Personnal summary section template</p>
</dd>
<dt><a href="#experienceTemplate">experienceTemplate</a> ⇒</dt>
<dd><p>Experience section template</p>
</dd>
<dt><a href="#educationTemplate">educationTemplate</a> ⇒</dt>
<dd><p>Education section template</p>
</dd>
<dt><a href="#skillsTemplate">skillsTemplate</a> ⇒</dt>
<dd><p>Skills section template</p>
</dd>
<dt><a href="#footerContentTemplate">footerContentTemplate</a> ⇒</dt>
<dd><p>Footer tag template</p>
</dd>
</dl>

<a name="headTemplate"></a>

## headTemplate ⇒
Head tag builder that contains most used meta tags

**Kind**: global variable  
**Returns**: String  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| { | <code>Object</code> | description = meta tag for description,   keywords = meta tag for keywords,   author = meta tag for author } |

<a name="asideItemTemplate"></a>

## asideItemTemplate ⇒
Aside section template

**Kind**: global variable  
**Returns**: String  
**Export**:   

| Param | Type |
| --- | --- |
| arrayDetails | <code>Array</code> | 

<a name="summaryTemplate"></a>

## summaryTemplate ⇒
Personnal summary section template

**Kind**: global variable  
**Returns**: String  
**Export**:   

| Param | Type |
| --- | --- |
| content | <code>Array</code> | 
| tagName | <code>String</code> | 

<a name="experienceTemplate"></a>

## experienceTemplate ⇒
Experience section template

**Kind**: global variable  
**Returns**: String  
**Export**:   

| Param | Type |
| --- | --- |
| experiences | <code>Array</code> | 

<a name="educationTemplate"></a>

## educationTemplate ⇒
Education section template

**Kind**: global variable  
**Returns**: String  

| Param | Type |
| --- | --- |
| education | <code>Array</code> | 

<a name="skillsTemplate"></a>

## skillsTemplate ⇒
Skills section template

**Kind**: global variable  
**Returns**: String  
**Export**:   

| Param | Type |
| --- | --- |
| skills | <code>String</code> | 

<a name="footerContentTemplate"></a>

## footerContentTemplate ⇒
Footer tag template

**Kind**: global variable  
**Returns**: String  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| { | <code>Object</code> | author = author name } |

