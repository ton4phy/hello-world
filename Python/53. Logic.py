# Exercise
# Implement the normalize_url function, which performs the so-called data normalization.
# It takes the address of the site and returns it with https: // at the beginning.

# The function accepts addresses as ADDRESS or http: // ADDRESS, but always returns the address as https: // ADDRESS

def normalize_url(url):
    https = 'https://'
    if url[:8] == https:
        return url
    else:
        if url[:7] == 'http://':
            return https + url[7:]
        else:
            return https + url
