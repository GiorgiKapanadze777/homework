# 1. Find Duplicates: Convert the keys of a dictionary to a list and then sort them is ascending order.

my_dict = {
  "b": 1,
  "a": 2,
  "d": 3,
  "e": 4,
  "c": 5
}

my_list = []
for i in my_dict:
  my_list.append(i)

print(sorted(my_list))


# 2. Find Maximum or Minimum Value: Determine the maximum or minimum value in a dictionary and display its corresponding key.

my_arr = []
for key,value in my_dict.items():
  if value == min(my_dict.values()):
    my_arr.append([key,value])
  if value == max(my_dict.values()):
    my_arr.append([key,value])
print(my_arr)



# 3. Combining Items: Combine items from multiple dictionaries into a single dictionary or list of tuples.

dict1 = {
  1: "a",
  2: "b",
  3: "c"
}

dict2 = {
  4: "g",
  5: "f",
  6: "e"
}

my_new_arr = []
for i in dict1:
  my_new_arr.append((i, dict1[i]))
for i in dict2:
  my_new_arr.append((i, dict2[i]))
print(my_new_arr)


# 4. Check for Key Existence: Use get() to check if a key exists in the dictionary without raising a KeyError.

print(my_dict.get("abc", "error"))

# 5. Remove and Return Value: Use pop() to remove a key-value pair from a dictionary and return the corresponding value.

def remturn(dictt, user_key):
  # new_dict = dict()
  # for i in dictt:
  #   if i != user_key:
  #     new_dict[i] = dictt[i]
  # return new_dict
  dictt.pop(user_key)
  return dictt

print(remturn({"a":1, "b":2, "c":3}, "c"))
# 6. Create a function called manual_keys

def manual_keys(dicttt):
  newar = []
  for i in dicttt:
    newar.append(i)
  return newar
print(manual_keys(dict2))
# 7. Create a function called manual_values
def manual_values(dicttt):
  newar = []
  for i in dicttt:
    newar.append(dicttt[i])
  return newar
print(manual_values(dict2))

# 8. Create a function called manual_items

def manual_items(dicttt):
  newar = []
  for i in dicttt:
    newar.append((i,dicttt[i]))
  return newar
print(manual_items(dict2))

# 9. Create a function called manual_get

def manual_get(dicttt, userkey, nothing = "error"):
  if userkey in dicttt.keys():
    return dicttt[userkey]
  else:
    return nothing
print(manual_get(dict2,"a"))

# 10. Create a function called manual_pop

def rempop(dictt, user_key):
  new_dict = dict()
  for i in dictt:
    if i != user_key:
      new_dict[i] = dictt[i]
  return new_dict

print(remturn({"a":1, "b":2, "c":3}, "c"))