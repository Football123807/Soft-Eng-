#!/usr/bin/env python3
"""
Text Analyzer Program
Analyzes text input and provides statistics like word count, character count, etc.
"""

def analyze_text(text):
    """Analyze the given text and return statistics."""
    if not text:
        return {
            'characters': 0,
            'words': 0,
            'lines': 0,
            'sentences': 0,
            'paragraphs': 0
        }
    
    # Count characters (including spaces)
    char_count = len(text)
    
    # Count words
    words = text.split()
    word_count = len(words)
    
    # Count lines
    lines = text.split('\n')
    line_count = len(lines)
    
    # Count sentences (approximate)
    sentence_endings = ['.', '!', '?']
    sentence_count = sum(text.count(ending) for ending in sentence_endings)
    
    # Count paragraphs (separated by blank lines)
    paragraphs = [p for p in text.split('\n\n') if p.strip()]
    paragraph_count = len(paragraphs)
    
    return {
        'characters': char_count,
        'words': word_count,
        'lines': line_count,
        'sentences': sentence_count,
        'paragraphs': paragraph_count
    }

def main():
    """Main function to run the text analyzer."""
    print("Text Analyzer")
    print("Enter your text (press Ctrl+D or Ctrl+Z when done):")
    print("-" * 50)
    
    try:
        lines = []
        while True:
            line = input()
            lines.append(line)
    except EOFError:
        pass
    
    text = '\n'.join(lines)
    stats = analyze_text(text)
    
    print("\n" + "=" * 50)
    print("Text Statistics:")
    print("=" * 50)
    print(f"Characters: {stats['characters']}")
    print(f"Words: {stats['words']}")
    print(f"Lines: {stats['lines']}")
    print(f"Sentences: {stats['sentences']}")
    print(f"Paragraphs: {stats['paragraphs']}")

if __name__ == "__main__":
    main()
