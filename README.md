SORTING ALGORITHMS

1. BUBBLE SORT

  i. ELI5 Explanation:

    You can use a Bubble Sorting Algorithm to find out who is tallest in your class!
    First, everyone gets into a line.
    Compare the first two people in line; if the person on the end is shorter, that person stays in place, if that person is taller, they switch places.
    Now the taller person checks their height against the next person in line, and if they are shorter, they will stay in place and the next person will go on to compare; if they are taller, they will switch places with that person too.
    Continue all the way to the end until the last person has no one next to compare to.
    Now start at the beginning of the line again and repeat.
    Once everyone is in the correct order, go through and compare one more time, just to be sure. You've completed a bubble sort!

  ii. Psuedo code:

    myRandomArray = [4,5,2,1,3]

    declare a bubble sort function
      declare a boolean variable to gauge if the array is sorted, set to false
      set a while loop to continue until the array is sorted
        declare a variable to track the individual swaps performed, set to 0
        iterate over the length of the array
        declare a variable named 'current', set to # of iterations
        declare a variable named 'next', set to # iterations + 1
        if current is greater than next, swap current and next
          increase number of swaps
        if no swaps were performed, change boolean variable to true, which breaks the while loop
    return the sorted array

    myRandomArray = [1,2,3,4,5]

  iii. In My Own Words: Describe Best Case, Worst Case

    Best Case Scenario: a sorted array
      The Bubble Sort algorithm will make 2 passes, the first to see if any swaps need to be made, the second to be sure no swaps have been made. This gives it an O(N) complexity at its best because it will only have to go through twice.

    Worst Case Scenario: an array with values that are each less than the next, a backwards sorted array
      The Bubble Sort algorithm will have to make a swap for each number then, an additional pass to ensure no swaps have been made. Worst case complexity is O(N^2).


2. QUICK SORT

  i. ELI5 Explanation:

    You can use a quick-sorting algorithm to find out who is tallest in your class!
    First, have everyone line up together in a straight line.
    Next, pick a volunteer--they will be the one who everyone is compared to.
    The volunteer will walk down the line of your classmates where each person will either go into a separate 'taller' line on the right or a separate 'shorter' line on the left, depending if they are taller or shorter than the volunteer. The volunteer will stay in the middle between the 'taller' and 'shorter' lines but will not be part of the line again until the end.
    Now, repeat the process so each line has it's own volunteer and compare the rest of your classmates in that line.
    Keep separating the lines and picking volunteers until each line only has one person.
    Next, everybody goes back into one big line, starting from the left line, then the volunteer, then the right line until everyone is back in line!

  ii. Psuedo Code:

    declare a quicksort function
      declare a variable to set the pivot point at a set index of the array
      (I set mine at at index 0 but it could be set at the length -1 or the length / 2)
      declare two empty arrays for the left and the right comparisons
      set base case: if the array length is 0, return an empty array
      set additional case: if array length is 1, return the array
      iterate over the array, starting at index 1
        if array[i] is less than the pivot, push array[i] to left array
        if array[i] is greater than the pivot, push array[i] to right array
    set left array to equal the result of the quicksort function on the left array
    set right array to equal the result of the quicksort function on the right array
    (this breaks the array down into little arrays until there's only one value in each array)
    return left array + pivot + right array

  iii. In My Own Words: Describe Best Case, Worst Case

    Best Case Scenario: the pivot is the middle value each time
      If the pivot is exactly in the middle, it is breaking the array in half each time it runs an iteration, causing it to take on an O(logN) complexity and reduce the times it needs to iterate.

    Worst Case Scenario: the pivot is the smallest value or largest value each time
      The point of the pivot is to break the array up into smaller arrays which are each broken down until there is only one value in each array. If the pivot point is always the smallest or largest, the array is not broken down at all except for the pivot being removed. It takes O(N^2) complexity and takes the longest amount of time to complete.

3. MERGE SORT

  i. ELI5 Explanation:

    Let's say you have a stack of small 4 boxes and you need to put them in order from lightest to heaviest, but you can only compare two at a time. You can perform a merge sort!
    First you will split up the boxes into two stacks, then split each of those stacks into two stacks. Now you have 4 different stacks with one box each.
    Pick up one box in each hand so you're holding two boxes, and compare which one is heavier. Put the heavier one on the right side, and the lighter one on the left side. Now do the same for the other two boxes. At this point you should have two sets of boxes with two boxes each.
    Now compare each of the boxes that are on the left side of their piles, and put the lighter one in a new stack.
    Compare the remaining left side box with the single right box, whichever is lighter will go in the stack in the new stack. Compare the last remaining boxes and add the lighter one to the new stack and then the last box. Now you've sorted the boxes by weight using a merge sort!

  ii. Pseudo Code:

    declare a quicksort function
    declare a merge function after the quicksort function
    set base case: if the array length is zero, return an empty array
    set additional base case: if the array length is one, return the array
    declare two variables set to empty arrays for the left and right side comparison
    iterate over the array
      if the index is even, push that value to the left side
      if the index is odd, push that value to the right side
    call the quicksort function on the left side
    call the quicksort function on the right side
    (this will break the array down into smaller arrays until each only has one value inside)
    return the merge function with the left array and right array as arguments

    enter the merge function
      declare a variable set to an empty array for the final sorted array
      create a while loop to continue while the left array and the right array are greater than zero
        if the value of the left array at index 0 is greater than the value of the right array at index 0, push the value at the 0 index of the left array into the result array.
        if the right one is less, push the right one into the array.
      create a while loop to continue while left array is greater than zero
        remove the first index of the array and push it into the resulting array
      create a while loop for the right array as well
        remove the first index and push it into the resulting array
      return the result

  iii. In My Own Words: Describe Best Case, Worst Case

    Best Case Scenario: The merge sort algorithm's best scenario is if the array is categorized by an O(N) complexity because it has to compare each value against another, even though it breaks the original array into smaller pieces, it still compares them one at a time.

    Worst Case Scenario: The worst case scenario complexity level is also at O(N) because it will compare each number with another number from the set for every value in the array.

4. INSERTION SORT

  i. ELI5 Explanation:

    [Jun,May,Apr,Mar,Feb,Jan,Dec,Nov,Oct,Sep,Aug,Jul]

    Let's say you have a list of the months of the year but they're all mixed up and you want to put them in order.
    First you'll look at which is first in line, June. Since there aren't any in front of June, June stays in place.
    Next you'll look at May and pull it out of the line, leaving an empty space where May was. Since May comes before June, June moves over into the space where May was and May goes into the space where June was.
    Now you'll look at April; pull April out of the list, leaving an empty space. Since April comes before June, June takes the space where April was. Now compare April to May; since April comes first, May scoots over into the space where June was, and now April takes the space where May was. Continue down the line until all of the months are in order. Now you've performed an insertion sort!

  ii. Psuedo Code:

    declare an insertion sort function
    iterate through the array
      declare a 'current' variable set to the array value at index number of iterations (i)
      declare a 'previous' variable set to the array value at index i - 1
      set a while loop to continue while the number 'previous' is greater than 0 and the value of the array at index 'previous' is greater than the value at the 'current' index
        set the value of array index previous + 1 to the value of the 'previous' position
        decrement previous by 1
      set the value of array index previous + 1 to the value of the 'current' index
    return the array

  iii. In My Own Words: Describe Best Case, Worst Case:

    Best Case Scenario: The best scenario for insertion sort is an already sorted list; it will not need to move any of the elements and will only need to make one pass through the list. This is categorized as an O(logN) complexity because it will only need to go through the list one time per value in the arary.

    Worst Case Scenario: The worst case scenario for the insertion sort is a backwards sorted array because it has to shift each value for every value in the array, making it an O(N^2) complexity.

5. SELECTION SORT

  i. ELI5 Explanation:

    [green, red, yellow, orange, purple, blue]

    We can use selection sort to arrage the colors of the rainbow correctly.
    Green is first in the list, so we will compare green to the other colors to see which color is first in the rainbow. Although red is the very next color, we will check through every color to be sure red comes first. Red is first so now we have red and green switch places and we leave red alone now. Now we check through the list again and find the next color, orange. Now green and orange switch places, and we leave orange alone. Continue this through the list until all of the colors are in order. Remember, sometimes you will have to make a color switch places multiple times.

  ii. Pseudo Code:

    declare a selection sort function
      iterate through the array
        assign a variable named 'smallest' to the number of iterations (i)
        create another iteration loop through the array but assign this iterator to the value of the outer iterative loop's number of iterations (I called it 'comp', short for comparison, i + 1)
          if the array at index 'comp' is less than the array at index 'smallest', the number smallest becomes the number comp
        if smallest is not equal to i, swap array value at index[i] and array value at index 'smallest'
    return the array

  iii. In My Own Words: Describe Best Case, Worst Case:

    Best Case Scenario: The array is backwards sorted so each pass will put two elements in their correct place each time. However, the array still has to be iterated through again for each element. While it doesn't have to sort through the entire array each time, it only reduces the iteration by one element per iteration making it an O(N^2) complexity.

    Worst Case Scenario: The array has the largest element first, then the remainder of the array is sorted. The algorithm would have to switch two elements for each pass through the array but would not be getting the logN complexity of allowing the largest element (if sorting smallest to largest) to be placed at the end of the array and then setting it aside such as with the smallest elements, it would only move one spot to the right. This would be an O(N^2) complexity as well.